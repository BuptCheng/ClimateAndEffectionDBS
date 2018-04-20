create table Users(
id number not null primary key,
username varchar2(50) not null,
password varchar2(50)not null
);

Insert into Users values(1,'abc', '123');


commit;

select *
from Users;