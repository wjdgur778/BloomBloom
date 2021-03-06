package finale.bloombloom.api.controller;


import finale.bloombloom.api.request.OrderBouquetRequest;
import finale.bloombloom.api.request.StoreLocationRequest;
import finale.bloombloom.api.response.*;
import finale.bloombloom.api.service.OrderService;
import finale.bloombloom.common.auth.BloomUserDetails;
import finale.bloombloom.common.model.response.Result;
import finale.bloombloom.db.entity.Order;
import finale.bloombloom.db.entity.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/order")
@RestController
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    /**
     * 기능 : 주문 내역 리스트 조회
     * 작성자 : 김정혁
     */
    @GetMapping
    ResponseEntity<Result> findOrder(Authentication authentication) {
        if (authentication == null)
            return ResponseEntity.status(401).body(Result.builder()
                    .message("인증 실패")
                    .build()
            );

        BloomUserDetails bloomUserDetails = (BloomUserDetails) authentication.getDetails();
        List<OrderListResponse> list = orderService.findOrderById(bloomUserDetails.getUsername());
        return ResponseEntity.status(200).body(Result.builder()
                .message("주문 내역 리스트 조회에 성공하였습니다.")
                .data(list)
                .build()
        );
    }

    /**
     * 기능 : 꽃다발 주문 의뢰
     * 작성자 : 김정혁
     */
    @PostMapping("/request")
    ResponseEntity<Result> orderBouquet(Authentication authentication, @RequestBody OrderBouquetRequest orderBouquetRequest) {
        if (authentication == null)
            return ResponseEntity.status(401).body(
                    Result.builder()
                            .message("인증 실패")
                            .build()
            );

        BloomUserDetails bloomUserDetails = (BloomUserDetails) authentication.getDetails();
        Order order = orderService.createOrder(orderBouquetRequest, bloomUserDetails.getUsername());
        return ResponseEntity.status(200).body(
                Result.builder()
                        .message("주문 의뢰에 성공하였습니다.")
                        .data(UuidResponse.from(order.getOrderUri()))
                        .build()
        );
    }

    /**
     * 기능 : 주문 내역 상세 조회
     * 작성자 : 김정혁
     */
    @GetMapping("/{orderSeq}")
    ResponseEntity<Result> findOrderDetail(Authentication authentication, @PathVariable Long orderSeq) {
        if (authentication == null)
            return ResponseEntity.status(401).body(
                    Result.builder()
                            .message("인증 실패")
                            .build()
            );

        OrderDetailResponse orderDetail = orderService.findOrderDetail(orderSeq);
        return ResponseEntity.status(200).body(
                Result.builder()
                        .message("주문내역 상세 조회에 성공하였습니다.")
                        .data(orderDetail)
                        .build()
        );
    }

    /**
     * 기능 : 근처 꽃집 조회
     * 설명 : 지도의 남서,북동쪽 좌표를 얻어와 꽃집의 location과 비교하는 query를 날린다.
     * 계산된 MBR(Minimum Bounding Rectangles) 안에 있는 꽃집만 조회한다.
     * 작성자 : 김정혁
     */
    @PostMapping("/map")
    ResponseEntity<Result> findStore(Authentication authentication, @RequestBody StoreLocationRequest storeLocationRequest) {
        if (authentication == null)
            return ResponseEntity.status(401).body(
                    Result.builder()
                            .message("인증 실패")
                            .build()
            );

        List<StoreLocationResponse> store = orderService.findStore(storeLocationRequest);
        return ResponseEntity.status(200).body(
                Result.builder()
                        .message("근처 꽃집 조회에 성공하였습니다.")
                        .data(store)
                        .build()
        );
    }

    /**
     * 기능: 주문 내역 상세 조회 (업체)
     * 작성자: 문준호
     */
    @GetMapping("/store/{uuid}")
    public ResponseEntity<Result> findOrderDetailByUUID(@PathVariable String uuid) {
        OrderResponse response = orderService.findOrderDetailByUUID(uuid);
        return ResponseEntity.status(200).body(
                Result.builder()
                        .message("주문내역 상세 조회(업체)에 성공하였습니다.")
                        .data(response)
                        .build()
        );
    }
}
