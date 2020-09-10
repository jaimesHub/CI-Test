- Giống nhau: chúng đều là function
- Khác nhau
    + Cú pháp: 
        * Arrow function sử dụng kí tự =>
            let sayHi = () => {
            console.log("Hi");
            }
            sayHi();
            // => Hi
        
        * Function sử dụng từ khóa function:
        let sayHi = function() {
        console.log("Hi");
        }
        sayHi();
        // => Hi   

    + Arrow function thường ngắn gọn hơn function
    + Arrow function không bind this
    + Arrow function không bind arguments
    + Arrow function không phù hợp làm method cho object
    + Arrow function không thể sử dụng làm hàm constructor
    + Arrow function không có thuộc tính prototype
    + Arrow function không được hoisted
            