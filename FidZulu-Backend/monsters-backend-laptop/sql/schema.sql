DROP TABLE FZBook;
DROP TABLE FZToys;
DROP TABLE FZBike;
DROP TABLE FZDVD;
DROP TABLE FZFood;
DROP TABLE FZLaptop;
DROP TABLE FZProduct;

-- Create FZProduct table
CREATE TABLE FZProduct (
    ProductId NUMBER PRIMARY KEY NOT NULL,
    ProductType VARCHAR2(255) NOT NULL,
    Price NUMBER CHECK (Price > 0) NOT NULL,
    Rating NUMBER CHECK (Rating >= 0 AND Rating <= 5),
    ImageURL VARCHAR2(255) UNIQUE
);

-- Create FZBike table
CREATE TABLE FZBike (
    BikeId NUMBER PRIMARY KEY NOT NULL,
    Manufacturer VARCHAR2(255) NOT NULL,
    ModelName VARCHAR2(255) NOT NULL,
    EngineCC NUMBER CHECK (EngineCC > 0) NOT NULL,
    Colour VARCHAR2(255) NOT NULL,
    FOREIGN KEY (BikeId) REFERENCES FZProduct(ProductId)
);

-- Create FZBook table
CREATE TABLE FZBook (
    BookId NUMBER PRIMARY KEY NOT NULL,
    BookName VARCHAR2(255)NOT NULL,
    Author VARCHAR2(255) NOT NULL,
    Genre VARCHAR2(255) NOT NULL,
    Publisher VARCHAR2(100) NOT NULL,
    ISBN VARCHAR2(255),
    FOREIGN KEY (BookId) REFERENCES FZProduct(ProductId)
);

-- Create FZDVD table
CREATE TABLE FZDVD (
    DVDId NUMBER PRIMARY KEY NOT NULL,
    DVDName VARCHAR2(255) NOT NULL,
    Category VARCHAR2(255) NOT NULL,
    Storage NUMBER CHECK (Storage > 0),
    FOREIGN KEY (DVDId) REFERENCES FZProduct(ProductId)
);

-- Create FZFood table
CREATE TABLE FZFood (
    FoodId NUMBER PRIMARY KEY NOT NULL,
    FoodName VARCHAR2(255) NOT NULL,
    Category VARCHAR2(255) NOT NULL,
    ShelfLife NUMBER CHECK (ShelfLife > 0) NOT NULL,
    VegNonVeg NUMBER CHECK (VegNonVeg In (0,1)),
    FOREIGN KEY (FoodId) REFERENCES FZProduct(ProductId)
);

-- Create FZLaptop table
CREATE TABLE FZLaptop (
    LaptopId NUMBER PRIMARY KEY NOT NULL,
    BrandName VARCHAR2(255) NOT NULL,
    ModelName VARCHAR2(255) NOT NULL,
    CPU VARCHAR2(100) NOT NULL,
    GPU VARCHAR2(100),
    RAM NUMBER CHECK (RAM > 0) NOT NULL,
    VRAM VARCHAR2(50) CHECK (VRAM > 0),
    Storage NUMBER CHECK (Storage > 0) NOT NULL,
    ScreenSize NUMBER CHECK (ScreenSize > 0) NOT NULL,
    Colour VARCHAR2(255) NOT NULL,
    FOREIGN KEY (LaptopId) REFERENCES FZProduct(ProductId)
);

-- Create FZToys table 
CREATE TABLE FZToys (
    ToyId NUMBER PRIMARY KEY NOT NULL, 
    ToyName VARCHAR2(255) NOT NULL,
    BrandName VARCHAR2(50) NOT NULL,
    Category VARCHAR2(50) NOT NULL,
    AppropriateAge VARCHAR2(20),
    FOREIGN KEY (ToyId) REFERENCES FZProduct(ProductId)
);
