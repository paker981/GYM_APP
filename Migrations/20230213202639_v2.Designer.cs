﻿// <auto-generated />
using System;
using GYM_APP_API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace GYMAPPAPI.Migrations
{
    [DbContext(typeof(FullStackDbContext))]
    [Migration("20230213202639_v2")]
    partial class v2
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("GYM_APP_API.Models.Member", b =>
                {
                    b.Property<Guid>("id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<long>("bmi")
                        .HasColumnType("bigint");

                    b.Property<string>("bmiResult")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("enquiryDate")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("firstName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("gender")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("haveGymBefore")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<long>("height")
                        .HasColumnType("bigint");

                    b.Property<string[]>("important")
                        .IsRequired()
                        .HasColumnType("text[]");

                    b.Property<string>("lastName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<long>("mobile")
                        .HasColumnType("bigint");

                    b.Property<string>("package")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("requireTrainer")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<long>("weight")
                        .HasColumnType("bigint");

                    b.HasKey("id");

                    b.ToTable("Members");
                });
#pragma warning restore 612, 618
        }
    }
}
