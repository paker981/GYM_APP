using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GYMAPPAPI.Migrations
{
    /// <inheritdoc />
    public partial class v2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Members",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uuid", nullable: false),
                    firstName = table.Column<string>(type: "text", nullable: false),
                    lastName = table.Column<string>(type: "text", nullable: false),
                    email = table.Column<string>(type: "text", nullable: false),
                    mobile = table.Column<long>(type: "bigint", nullable: false),
                    weight = table.Column<long>(type: "bigint", nullable: false),
                    height = table.Column<long>(type: "bigint", nullable: false),
                    bmi = table.Column<long>(type: "bigint", nullable: false),
                    bmiResult = table.Column<string>(type: "text", nullable: false),
                    gender = table.Column<string>(type: "text", nullable: false),
                    requireTrainer = table.Column<string>(type: "text", nullable: false),
                    package = table.Column<string>(type: "text", nullable: false),
                    important = table.Column<string[]>(type: "text[]", nullable: false),
                    haveGymBefore = table.Column<string>(type: "text", nullable: false),
                    enquiryDate = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Members", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Members");
        }
    }
}
