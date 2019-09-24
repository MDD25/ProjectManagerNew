﻿USE [master]
GO

CREATE DATABASE [WebAPIDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'WebAPIDB', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\WebAPIDB.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'WebAPIDB_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL11.MSSQLSERVER\MSSQL\DATA\WebAPIDB_log.ldf' , SIZE = 2048KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [WebAPIDB] SET COMPATIBILITY_LEVEL = 110
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [WebAPIDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [WebAPIDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [WebAPIDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [WebAPIDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [WebAPIDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [WebAPIDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [WebAPIDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [WebAPIDB] SET AUTO_CREATE_STATISTICS ON 
GO
ALTER DATABASE [WebAPIDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [WebAPIDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [WebAPIDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [WebAPIDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [WebAPIDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [WebAPIDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [WebAPIDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [WebAPIDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [WebAPIDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [WebAPIDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [WebAPIDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [WebAPIDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [WebAPIDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [WebAPIDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [WebAPIDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [WebAPIDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [WebAPIDB] SET RECOVERY FULL 
GO
ALTER DATABASE [WebAPIDB] SET  MULTI_USER 
GO
ALTER DATABASE [WebAPIDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [WebAPIDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [WebAPIDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [WebAPIDB] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
EXEC sys.sp_db_vardecimal_storage_format N'WebAPIDB', N'ON'
GO
USE [WebAPIDB]
GO
/****** Object:  Table [dbo].[ParentTask]    Script Date: 17-11-2018 10:03:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[ParentTask](
	[ParentID] [int] IDENTITY(1,1) NOT NULL,
	[ParentTask] [varchar](50) NULL
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Project]    Script Date: 17-11-2018 10:03:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Project](
	[ProjectID] [int] IDENTITY(1,1) NOT NULL,
	[StartDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[Priority] [int] NULL,
	[ProjectTitle] [varchar](200) NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ProjectID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[Task]    Script Date: 17-11-2018 10:03:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[Task](
	[TaskID] [int] IDENTITY(1,1) NOT NULL,
	[ParentID] [int] NULL,
	[ProjectID] [int] NULL,
	[Task] [varchar](200) NULL,
	[StartDate] [datetime] NULL,
	[EndDate] [datetime] NULL,
	[Priority] [int] NULL,
	[Status] [varchar](50) NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[TaskID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
/****** Object:  Table [dbo].[User]    Script Date: 17-11-2018 10:03:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
SET ANSI_PADDING ON
GO
CREATE TABLE [dbo].[User](
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[EmployeeID] [varchar](50) NULL,
	[FirstName] [varchar](50) NULL,
	[LastName] [varchar](50) NULL,
	[ProjectID] [int] NULL,
	[TaskID] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[UserID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET ANSI_PADDING OFF
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ProjectID])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Project]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([TaskID])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Task]
GO
USE [master]
GO
ALTER DATABASE [WebAPIDB] SET  READ_WRITE 
GO