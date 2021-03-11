﻿




CREATE TABLE Склад (

 primaryKey UUID NOT NULL,

 Название VARCHAR(255) NULL,

 Адрес VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Покупатель (

 primaryKey UUID NOT NULL,

 Навзвание VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Продажа (

 primaryKey UUID NOT NULL,

 Дата TIMESTAMP(3) NULL,

 ОбщаяЦена DOUBLE PRECISION NULL,

 Покупатель_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE СтрокаПродажи (

 primaryKey UUID NOT NULL,

 Колво INT NULL,

 ЖБС VARCHAR(255) NULL,

 Товар_m0 UUID NOT NULL,

 Продажа_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE Товар (

 primaryKey UUID NOT NULL,

 Название VARCHAR(255) NULL,

 Цена DOUBLE PRECISION NULL,

 Склад_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMNETLOCKDATA (

 LockKey VARCHAR(300) NOT NULL,

 UserName VARCHAR(300) NOT NULL,

 LockDate TIMESTAMP(3) NULL,

 PRIMARY KEY (LockKey));



CREATE TABLE STORMSETTINGS (

 primaryKey UUID NOT NULL,

 Module VARCHAR(1000) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 "User" VARCHAR(255) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMAdvLimit (

 primaryKey UUID NOT NULL,

 "User" VARCHAR(255) NULL,

 Published BOOLEAN NULL,

 Module VARCHAR(255) NULL,

 Name VARCHAR(255) NULL,

 Value TEXT NULL,

 HotKeyData INT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERSETTING (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMWEBSEARCH (

 primaryKey UUID NOT NULL,

 Name VARCHAR(255) NOT NULL,

 "Order" INT NOT NULL,

 PresentView VARCHAR(255) NOT NULL,

 DetailedView VARCHAR(255) NOT NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERDETAIL (

 primaryKey UUID NOT NULL,

 Caption VARCHAR(255) NOT NULL,

 DataObjectView VARCHAR(255) NOT NULL,

 ConnectMasterProp VARCHAR(255) NOT NULL,

 OwnerConnectProp VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE STORMFILTERLOOKUP (

 primaryKey UUID NOT NULL,

 DataObjectType VARCHAR(255) NOT NULL,

 Container VARCHAR(255) NULL,

 ContainerTag VARCHAR(255) NULL,

 FieldsToView VARCHAR(255) NULL,

 FilterSetting_m0 UUID NOT NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE UserSetting (

 primaryKey UUID NOT NULL,

 AppName VARCHAR(256) NULL,

 UserName VARCHAR(512) NULL,

 UserGuid UUID NULL,

 ModuleName VARCHAR(1024) NULL,

 ModuleGuid UUID NULL,

 SettName VARCHAR(256) NULL,

 SettGuid UUID NULL,

 SettLastAccessTime TIMESTAMP(3) NULL,

 StrVal VARCHAR(256) NULL,

 TxtVal TEXT NULL,

 IntVal INT NULL,

 BoolVal BOOLEAN NULL,

 GuidVal UUID NULL,

 DecimalVal DECIMAL(20,10) NULL,

 DateTimeVal TIMESTAMP(3) NULL,

 PRIMARY KEY (primaryKey));



CREATE TABLE ApplicationLog (

 primaryKey UUID NOT NULL,

 Category VARCHAR(64) NULL,

 EventId INT NULL,

 Priority INT NULL,

 Severity VARCHAR(32) NULL,

 Title VARCHAR(256) NULL,

 Timestamp TIMESTAMP(3) NULL,

 MachineName VARCHAR(32) NULL,

 AppDomainName VARCHAR(512) NULL,

 ProcessId VARCHAR(256) NULL,

 ProcessName VARCHAR(512) NULL,

 ThreadName VARCHAR(512) NULL,

 Win32ThreadId VARCHAR(128) NULL,

 Message VARCHAR(2500) NULL,

 FormattedMessage TEXT NULL,

 PRIMARY KEY (primaryKey));




 ALTER TABLE Продажа ADD CONSTRAINT FKedf1f68f36c6e330dd8414e44cba783c594a524f FOREIGN KEY (Покупатель_m0) REFERENCES Покупатель; 
CREATE INDEX Indexedf1f68f36c6e330dd8414e44cba783c594a524f on Продажа (Покупатель_m0); 

 ALTER TABLE СтрокаПродажи ADD CONSTRAINT FK9c91d9cad7ee75fe65c1fc2e219f7a965ca4257a FOREIGN KEY (Товар_m0) REFERENCES Товар; 
CREATE INDEX Index9c91d9cad7ee75fe65c1fc2e219f7a965ca4257a on СтрокаПродажи (Товар_m0); 

 ALTER TABLE СтрокаПродажи ADD CONSTRAINT FK4b5257dde13a7524c175b186c7f8f20e964d929d FOREIGN KEY (Продажа_m0) REFERENCES Продажа; 
CREATE INDEX Index4b5257dde13a7524c175b186c7f8f20e964d929d on СтрокаПродажи (Продажа_m0); 

 ALTER TABLE Товар ADD CONSTRAINT FK955b0a6434d99d9c9b3a82980939938693fd247d FOREIGN KEY (Склад_m0) REFERENCES Склад; 
CREATE INDEX Index955b0a6434d99d9c9b3a82980939938693fd247d on Товар (Склад_m0); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

