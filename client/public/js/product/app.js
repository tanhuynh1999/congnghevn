Vue.component('w-ckeditor-vue', window['w-ckeditor-vue'])
var Main = {
    data() {
        return {
            tableData: [
                {
                    code: 'BP-1',
                    name: 'Bàn phím đẹp và chất lượng',
                    image: 'https://www.anphatpc.com.vn/media/news/1308_Cyberborad.jpg',
                    category: 'Dụng cụ máy tính',
                    price: '40.000 vnđ',
                    view: '20',
                    describe: 'Bàn phím cơ Rapoo Gaming V806 LED RGB được thiết kế và sản xuất bởi hãng Rapoo – công ty chuyên về thiết kế, phát triển và sản xuất các thiết bị ngoại vi như chuột, bàn phím, tai nghe chuyên dùng cho gaming đang được các game thủ Việt Nam ưa chuộng trong thời gian gần đây.',
                    content: 'Công tắc phím cơ Omron quá quen thuộc với các sản phẩm Logitech nay đã song hành cùng Bàn phím cơ Rapoo Gaming V806. Với tuổi thọ một phím lên tới 70 triệu lượt nhấn, rất bền và đáng tin cậy trong trò chơi. Thiết kế không xung đột cho 104 phím trên bàn phím, cho phép bạn nhấn đồng thời bất kỳ số lượng phím nào và đảm bảo rằng mọi lệnh của bạn được đăng ký và thực hiện chính xác và nhanh chóng.',
                    datecreate: '21/09/2021 lúc 2:26',
                    datemodified: '21/09/2021 lúc 2:26',
                    usercreate: 'tanhuynh',
                    usermodified: 'tanhuynh',
                    active: true,
                    bin: false,
                    follow: false,
                    note: false
                }, 
                {
                    code: 'BP-2',
                    name: 'Bàn phím đẹp và chất lượng',
                    image: 'https://www.anphatpc.com.vn/media/news/1308_Cyberborad.jpg',
                    category: 'Dụng cụ máy tính',
                    price: '40.000 vnđ',
                    view: '20',
                    describe: 'Bàn phím cơ Rapoo Gaming V806 LED RGB được thiết kế và sản xuất bởi hãng Rapoo – công ty chuyên về thiết kế, phát triển và sản xuất các thiết bị ngoại vi như chuột, bàn phím, tai nghe chuyên dùng cho gaming đang được các game thủ Việt Nam ưa chuộng trong thời gian gần đây.',
                    content: 'Công tắc phím cơ Omron quá quen thuộc với các sản phẩm Logitech nay đã song hành cùng Bàn phím cơ Rapoo Gaming V806. Với tuổi thọ một phím lên tới 70 triệu lượt nhấn, rất bền và đáng tin cậy trong trò chơi. Thiết kế không xung đột cho 104 phím trên bàn phím, cho phép bạn nhấn đồng thời bất kỳ số lượng phím nào và đảm bảo rằng mọi lệnh của bạn được đăng ký và thực hiện chính xác và nhanh chóng.',
                    datecreate: '21/09/2021 lúc 2:26',
                    datemodified: '21/09/2021 lúc 2:26',
                    usercreate: 'tanhuynh',
                    usermodified: 'tanhuynh',
                    active: false,
                    bin: false,
                    follow: false,
                    note: false
                },
            ],
            listData:{
                tabsMain: [
                    {
                        label: 'Tất cả sản phẩm',
                        name: 'index'
                    },
                    {
                        label: 'Theo dõi',
                        name: 'follow'
                    },
                    {
                        label: 'Chú ý',
                        name: 'note'
                    },
                    {
                        label: 'Thùng rác',
                        name: 'bin'
                    }
                ],
                optionsAction: [
                    {
                        label: 'Theo dõi',
                        value: '1'
                    },
                    {
                        label: 'Chú ý',
                        value: '2'
                    },
                    {
                        label: 'Đưa vào thùng rác',
                        value: '3'
                    },
                    {
                        label: 'Khôi phục',
                        value: '4'
                    }
                ],
                optionsCategory: [
                    {
                        label: 'Dụng cụ máy tính',
                        value: '1'
                    },
                    {
                        label: 'Phần mềm',
                        value: '2'
                    },
                    {
                        label: 'Phần cứng',
                        value: '3'
                    }
                ],
                indexProductAPI: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                    }
                ]
            },
            productForm: {
                code: '',
                name: '',
                image: '',
                category: [],
                describe: '',
                content: '',
                price: '',
                view: '',
                active: true,
            },
            productAPIForm: {
                link: '',
                user: '',
                password: '',
                key: ''
            },
            productValidate: {
                name: [
                    { 
                        required: true,
                        message: 'Vui lòng nhập tên sản phẩm', 
                        trigger: 'change' 
                    },
                    { 
                        max: 200, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'change' 
                    }
                ],
                code: [
                    { 
                        max: 10, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'change' 
                    }
                ],
                describe: [
                    { 
                        max: 500, 
                        message: 'Vượt quá số ký tự cho phép', 
                        trigger: 'change' 
                    }
                ]
            },
            productAPIValidate: {

            },
            multipleSelection: [],
            dialogFormCreateProductVisible: false,
            labelPositionTop: 'top',
            activeMain: 'index',
            search: '',
            valueAction: '',
            isCreate: false,
            isCreateAPI: false,
            loadingForm: false,
            loadingTable: false,
            activeInstructCreateAPI: ['1','2','3'],
            progress: 0,
            isProgressCreateAPI: false
        }
    },
    mounted() {
        
    },
    wacth: {

    },
    methods: {
        uploadimage()
        {
            const preview = document.getElementById("myImage");
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                // convert image file to base64 string
                preview.src = reader.result;
            }, false);
        
            if (file) {
                reader.readAsDataURL(file);
            }
        },
        clickCreateProduct()
        {
            let that = this;
            that.isCreate = true;
            that.dialogFormCreateProductVisible = true;
            that.title = "Thêm sản phẩm mới";

            this.setTimeout1sLoading();
            that.colorCreate = '#909399';
            that.textCreate = '#FFF';
        },
        clickCreateProductSub()
        {
            let that = this;
            this.clearForm();
            that.isCreate = true;
            that.title = "Thêm sản phẩm mới";
            this.setTimeout1sLoading();

            that.colorCreate = '#909399';
            that.textCreate = '#FFF';
        },
        clickCreateAPIProduct()
        {
            let that = this;
            this.clearForm();
            that.isCreateAPI = true;
            that.title = "Thêm sản phẩm bằng API";

            this.setTimeout1sLoading();
            that.colorCreateAPI = '#909399';
            that.textCreateAPI = '#FFF';
        },
        createProduct(productForm)
        {
            let that = this;
            that.$refs[productForm].validate((valid) => {
                if (valid) {
                    console.log(this.productForm);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        createProductAPI(productAPIForm)
        {
            let that = this;
            that.isProgressCreateAPI = true;
            that.loadingTable = true;
            that.$refs[productAPIForm].validate((valid) => {
                if (valid) {
                    console.log(this.productAPIForm);
                    $.ajax({
                        url: this.productAPIForm.link,
                        type: "GET",
                        dataType: 'json',
                        async: true,
                        contentType: 'application/json; charset=UTF-8',
                        success: function (rs) {
                            var data = JSON.parse(JSON.stringify(rs))
                            data.forEach((item, index) => {
                                setTimeout(function(){
                                    that.progress = index + 1;
                                    that.listData.indexProductAPI.push(item);
                                 }, 1000);
                            })
                            that.loadingTable = false;
                        },
                        error: function (xhr, status, err) { }
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        clearForm()
        {
            let that = this;
            that.isCreate = false;
            that.isCreateAPI = false;
            that.textCreate = '';
            that.textCreateAPI = '';
            that.colorCreate = '';
            that.colorCreateAPI = '';
        },
        setTimeout1sLoading()
        {
            let that = this;
            that.loadingForm = true;

            setTimeout(function(){ 
                that.loadingForm = false;
            }, 1000);
        }
    }
};
var Ctor = Vue.extend(Main)
new Ctor().$mount('#app')