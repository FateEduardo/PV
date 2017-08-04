USE [master]
GO
/****** Object:  Database [PV]    Script Date: 28/07/2017 08:04:18 p. m. ******/
CREATE DATABASE [PV]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PV', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\PV.mdf' , SIZE = 5120KB , MAXSIZE = UNLIMITED, FILEGROWTH = 1024KB )
 LOG ON 
( NAME = N'PV_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL12.SQLEXPRESS\MSSQL\DATA\PV_log.ldf' , SIZE = 1024KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [PV] SET COMPATIBILITY_LEVEL = 100
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PV].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PV] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PV] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PV] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PV] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PV] SET ARITHABORT OFF 
GO
ALTER DATABASE [PV] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PV] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PV] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PV] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PV] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PV] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PV] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PV] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PV] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PV] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PV] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PV] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PV] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PV] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PV] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PV] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PV] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PV] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [PV] SET  MULTI_USER 
GO
ALTER DATABASE [PV] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PV] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PV] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PV] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [PV] SET DELAYED_DURABILITY = DISABLED 
GO
USE [PV]
GO
/****** Object:  Table [dbo].[CATEGORY]    Script Date: 28/07/2017 08:04:18 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CATEGORY](
	[ID] [bigint] NOT NULL,
	[NAME] [nvarchar](20) NOT NULL,
	[CREATE_USER] [nvarchar](20) NOT NULL,
	[CREATE_DATE] [timestamp] NOT NULL,
 CONSTRAINT [PK_CATEGORY] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[INGREDIENTS]    Script Date: 28/07/2017 08:04:18 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[INGREDIENTS](
	[ID] [bigint] NOT NULL,
	[NAME] [nvarchar](20) NOT NULL,
	[EXTRA] [bit] NOT NULL,
	[CREATE_USER] [nvarchar](20) NOT NULL,
	[CREATE_DATE] [nvarchar](20) NOT NULL,
	[PRICE] [decimal](4, 2) NOT NULL,
 CONSTRAINT [PK_INGREDIENTS] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PRODUCT]    Script Date: 28/07/2017 08:04:18 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCT](
	[ID] [bigint] NOT NULL,
	[NAME] [nvarchar](20) NOT NULL,
	[CATEGORY_ID] [bigint] NOT NULL,
	[CREATE_NAME] [nvarchar](20) NOT NULL,
	[CREATE_DATE] [timestamp] NOT NULL,
 CONSTRAINT [PK_PRODUCT] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[PRODUCT_INGREDIENTS]    Script Date: 28/07/2017 08:04:18 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PRODUCT_INGREDIENTS](
	[ID] [bigint] NOT NULL,
	[PRODUCT_ID] [bigint] NOT NULL,
	[INGREDIENTS_ID] [bigint] NOT NULL,
	[CREATE_USER] [nvarchar](20) NOT NULL,
	[CREATE_DATE] [timestamp] NOT NULL,
 CONSTRAINT [PK_PRODUCT_INGREDIENTS] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[ROLE]    Script Date: 28/07/2017 08:04:18 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ROLE](
	[ID] [bigint] NOT NULL,
	[ROLE_NAME] [nvarchar](20) NOT NULL,
	[CREATE_NAME] [nvarchar](20) NOT NULL,
	[CREATE_DATE] [date] NOT NULL,
 CONSTRAINT [PK_ROL] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Table [dbo].[USER]    Script Date: 28/07/2017 08:04:18 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[USER](
	[ID] [bigint] IDENTITY(1,1) NOT NULL,
	[USER_NAME] [nvarchar](20) NOT NULL,
	[PASSWORD] [nvarchar](20) NOT NULL,
	[ROLE] [bigint] NOT NULL,
	[CREATE_USER] [nvarchar](20) NOT NULL,
	[CREATE_DATE] [timestamp] NOT NULL,
 CONSTRAINT [PK_USER] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
/****** Object:  Index [IX_CATEGORY]    Script Date: 28/07/2017 08:04:18 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_CATEGORY] ON [dbo].[CATEGORY]
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_INGREDIENTS]    Script Date: 28/07/2017 08:04:18 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_INGREDIENTS] ON [dbo].[INGREDIENTS]
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_PRODUCT]    Script Date: 28/07/2017 08:04:18 p. m. ******/
CREATE UNIQUE NONCLUSTERED INDEX [IX_PRODUCT] ON [dbo].[PRODUCT]
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PRODUCT]  WITH CHECK ADD  CONSTRAINT [FK_PRODUCT_ID] FOREIGN KEY([CATEGORY_ID])
REFERENCES [dbo].[CATEGORY] ([ID])
GO
ALTER TABLE [dbo].[PRODUCT] CHECK CONSTRAINT [FK_PRODUCT_ID]
GO
ALTER TABLE [dbo].[PRODUCT_INGREDIENTS]  WITH CHECK ADD  CONSTRAINT [FK_PRODUCT_INGREDIENTS_INGREDIENTS] FOREIGN KEY([INGREDIENTS_ID])
REFERENCES [dbo].[INGREDIENTS] ([ID])
GO
ALTER TABLE [dbo].[PRODUCT_INGREDIENTS] CHECK CONSTRAINT [FK_PRODUCT_INGREDIENTS_INGREDIENTS]
GO
ALTER TABLE [dbo].[PRODUCT_INGREDIENTS]  WITH CHECK ADD  CONSTRAINT [FK_PRODUCT_INGREDIENTS_PRODUCT] FOREIGN KEY([PRODUCT_ID])
REFERENCES [dbo].[PRODUCT] ([ID])
GO
ALTER TABLE [dbo].[PRODUCT_INGREDIENTS] CHECK CONSTRAINT [FK_PRODUCT_INGREDIENTS_PRODUCT]
GO
ALTER TABLE [dbo].[USER]  WITH CHECK ADD  CONSTRAINT [FK_USER_ROL] FOREIGN KEY([ROLE])
REFERENCES [dbo].[ROLE] ([ID])
GO
ALTER TABLE [dbo].[USER] CHECK CONSTRAINT [FK_USER_ROL]
GO
USE [master]
GO
ALTER DATABASE [PV] SET  READ_WRITE 
GO