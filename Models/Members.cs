namespace GYM_APP_API.Models
{
    public class Member
    {
        public Guid id { get; set; }

        public string firstName { get; set; }

        public string lastName { get; set; }

        public string email { get; set; }

        public long mobile { get; set; }

        public decimal weight { get; set; }

        public decimal height { get; set; }

        public decimal bmi { get; set; }

        public string bmiResult { get; set; }

        public string gender { get; set; }

        public string requireTrainer { get; set; }

        public string package { get; set; }

        public string[] important { get; set; }

        public string haveGymBefore { get; set; }

        public string enquiryDate { get; set; }


    }
}
