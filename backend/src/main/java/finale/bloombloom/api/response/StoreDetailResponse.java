package finale.bloombloom.api.response;

import finale.bloombloom.db.entity.mapper.StoreDetailMapper;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class StoreDetailResponse {
    private Long storeSeq;
    private String storeName;
    private String storeContact;
    private String storeAddress;
    private String storeRegNum;
    private String storeMapId;
    private String storeBlogId;
    private String storeInstagramId;
    private String storeImageLink;

    public static StoreDetailResponse from(StoreDetailMapper store) {
        return StoreDetailResponse.builder()
                .storeSeq(store.getStoreSeq())
                .storeName(store.getStoreName())
                .storeContact(store.getStoreContact())
                .storeAddress(store.getStoreAddress())
                .storeRegNum(store.getStoreRegNum())
                .storeMapId(store.getStoreMapId())
                .storeBlogId(store.getStoreBlogId())
                .storeInstagramId(store.getStoreInstagramId())
                .storeImageLink(store.getStoreImageLink())
                .build();
    }
}
