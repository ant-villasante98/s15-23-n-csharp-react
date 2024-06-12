namespace CakeBack.Models.MercadoPago
{
    public class MercadoPagoNotification
    {
        public string Action { get; set; }
        public string ApiVersion { get; set; }
        public NotificationData Data { get; set; }
        public DateTime DateCreated { get; set; }
        public long Id { get; set; }
        public bool LiveMode { get; set; }
        public string Type { get; set; }
        public long UserId { get; set; }
    }

    public class NotificationData
    {
        public long Id { get; set; }
    }
}