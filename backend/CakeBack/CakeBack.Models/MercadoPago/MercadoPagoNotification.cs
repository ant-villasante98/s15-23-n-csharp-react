namespace CakeBack.Models.MercadoPago
{
    public class MercadoPagoNotification
    {
        public string Action { get; set; }
        public string ApiVersion { get; set; }
        public MercadoPagoNotificationData Data { get; set; }
        public DateTime DateCreated { get; set; }
        public long Id { get; set; }
        public bool LiveMode { get; set; }
        public string Type { get; set; }
        public string UserId { get; set; }
    }

    public class MercadoPagoNotificationData
    {
        public string Id { get; set; }
    }

    public class MercadoPagoPaymentInfo
    {
        public string Id { get; set; }
        public string Status { get; set; }
        public string PreferenceId { get; set; }
        public string PaymentMethodId { get; set; }
        public string PaymentTypeId { get; set; }
        public string CurrencyId { get; set; }
        public string Description { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime LastModified { get; set; }
    }
}