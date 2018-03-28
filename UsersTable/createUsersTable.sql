create table Users(
username varchar2(50) not null primary key,
password varchar2(50)not null
);

Insert into Users values('abc', '123');

commit;

select *
from Users;