using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Cacke.Identity.Migrations
{
    /// <inheritdoc />
    public partial class general : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Data",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adress = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FechaNacimiento = table.Column<DateTime>(type: "datetime2", nullable: false),
                    DNI = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Data", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0cf21943-5701-4f90-992e-d2ddbf2a8b12",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "df6154e4-2f39-48f7-9ee4-3879f9ba2e64", "AQAAAAIAAYagAAAAELQvJ1FXtkSnhz4sPOezHzUmtVtUu8/JL5Nn9AVF+i/Uvn+JccUUTEpwBc0LzbUPaw==", "1b27d946-ca01-4774-b46a-2d034c6938f4" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3905e1ee-c377-47b8-a82d-8c86ee721551",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "fb75f712-b1ba-454b-b646-625f52ef80e0", "AQAAAAIAAYagAAAAEEpJaefHDiAU83pe0Fg7dcXl/bXD4sOpMWjDq2sYVY1uYTYZSP+j8Ij3+YMMD+S8Zw==", "3f844ff5-cb0a-4946-9ee7-bbd0176df1ff" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Data");

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "0cf21943-5701-4f90-992e-d2ddbf2a8b12",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "52709d23-1830-4396-bb3a-5bcf94be3335", "AQAAAAIAAYagAAAAEMKQI2bIiXTg9K7d0t60/BDKiGYPn59q+fFvmLCmxb1NzPgXYfksSpR+U8R9PLlwbQ==", "235b3343-a4c1-42b5-bc20-bd88fca3df7a" });

            migrationBuilder.UpdateData(
                table: "AspNetUsers",
                keyColumn: "Id",
                keyValue: "3905e1ee-c377-47b8-a82d-8c86ee721551",
                columns: new[] { "ConcurrencyStamp", "PasswordHash", "SecurityStamp" },
                values: new object[] { "29b7fb4d-73ca-46e9-9eae-11ef41331fd1", "AQAAAAIAAYagAAAAEOd5ThMXUjHxkrDeU+aDfoE/4pdKPel7Au5z8pTruix0OqDCHMTOkrEXBIb8I78NeQ==", "5e37a259-f8df-4694-904c-a80d988439f5" });
        }
    }
}
