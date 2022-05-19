package finale.bloombloom.api.request;

import lombok.Getter;

@Getter
public class OrderBouquetRequest {
    private long bouquetSeq;
    private long storeSeq;
    private String orderDesc;
    private String contact;
}
