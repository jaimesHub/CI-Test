/**
 * form đăng kí có các trường phải điền là:
					+ firstName
					+ lastName
					+ email
					+ phoneNumber : kiểu number
 */
const signupForm = document.getElementById('signup__form');
signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const data = {
        firstName: signupForm.firstName.value,
        lastName: signupForm.lastName.value,
        email: signupForm.email.value,
        phoneNumber: signupForm.phoneNumber.value
    }

    /**
     * Khi new user nhấn submit vào, hệ thống sẽ tự động add data this user vào 
     * database đã được tạo sẵn có tên là: users
     * 
     * New data phải có dạng :
     *  newData: {
     *      firstName: 'blabla',
     *      lastName: 'blo blo',
     *      email: 'blc blc',
     *      phoneNumber: 'number type'
     *  }
     * - Task 1: thêm bản ghi
     * 
     */
    let first_data = firebase.firestore().collection('users').get();
    async function addData(newData) {
        // thêm 1 bản ghi
        await firebase.firestore().collection('users').add({
            firstName: newData.firstName,
            lastName: newData.lastName,
            email: newData.email,
            phoneNumber: newData.phoneNumber
        });
    }

    addData(data);
    let second_data = firebase.firestore().collection('users').get();
    // console.log();
    if (second_data !== first_data) {
        alert("Add success!");
    } else {
        alert("Fail!")
    }

    document.getElementById('signup__form').reset();
});


/**
 * -Ta sẽ đọc nhiều bản ghi để kiểm tra tính chính xác khi cài đặt
 * - Task 2: In ra màn hình console thông tin của tất cả các users
 */
async function readData() {

    let new_users = await firebase.firestore().collection('users').get();
    console.log(new_users);
    for (let new_user of new_users.docs) {
        console.log(new_user.data());
    }

}

/**
 * - Task 3: update tất cả 2 số đầu của phoneNumber = 84
 */
async function updateData() {
    // update nhiều bản ghi
    let result = await firebase.firestore().collection('users').get();

    // duyệt tất cả các bản ghi có trong collection và lấy id ra để update
    for (let doc of result.docs) {
        let temp = '+84' + doc.data().phoneNumber.toString();

        await firebase.firestore().collection('users').doc(doc.id).update({
            phoneNumber: temp
        })
    }
}

/**
 * - Task 4: xóa các bản ghi có tên lastName trùng nhau
 */
async function deleteData() {
    // lấy danh sách bản ghi của collection users
    let result = await firebase.firestore().collection('users').get();
    let lastNameItems = []; // tạo 1 mảng chứa các lastName
    let unique = []; // tạo 1 mảng chứa các lastName k bị trùng lặp
    let notUnique = []; // tạo 1 mảng chứa các lastName trùng lặp => sử dụng để xóa

    // duyệt qua các users để lấy ra các lastName => push vào mảng
    for (let doc of result.docs) {
        lastNameItems.push(doc.data().lastName);
    }

    // cho các lastName vào trùng lặp và k trùng lặp 
    for (let lastNameItem of lastNameItems) {
        if (unique.indexOf(lastNameItem) === -1) {
            unique.push(lastNameItem);
        } else {
            notUnique.push(lastNameItem);
        }
    }

    // xóa theo yêu cầu
    for (let doc of result.docs) {
        if (notUnique.includes(doc.data().lastName)) {
            await firebase.firestore().collection('users').doc(doc.id).delete();
        }
    }
}

//https://medium.com/@aaron_lu1/firebase-cloud-firestore-add-set-update-delete-get-data-6da566513b1b
//https://firebase.google.com/docs/firestore/quickstart
//https://www.youtube.com/watch?v=1BkDep-r8pA&fbclid=IwAR0MFs4tuEyWgXuuvKDuRS9kchgRO7d4sIU7vXehW_UgFPtWxdI6IgU45tg