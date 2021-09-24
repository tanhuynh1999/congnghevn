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
                ],
                optionsFonts: [
                    {
                        value: 'Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif',
                        label: 'Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif'
                    }
                ],
                optionsUser: [
                    {
                        value: 'tan.hm',
                        label: 'tan.hm',
                    }
                ],
                optionsBnt: [
                    {
                        label: 'Thêm sản phẩm',
                        value: '1',
                    },
                    {
                        label: 'Thêm API',
                        value: '2',
                    },
                    {
                        label: 'Thêm tải lên',
                        value: '3',
                    },
                    {
                        label: 'Cài đặt',
                        value: '4',
                    },
                    {
                        label: 'Cài đặt giao diện',
                        value: '5',
                    },
                    {
                        label: 'Cài đặt mật khẩu',
                        value: '6',
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
            settingForm: {
                bgcolor: false,
                bgcolorMain: '',
                fonts: ''
            },
            createPasswordForm: {
                btn: [],
                useraccess: [],
                usereditpassword: [],
                password: '',
                respassword: ''
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
            createPasswordValidate: {
                
            },
            multipleSelection: [],
            dialogFormCreateProductVisible: false,
            labelPositionTop: 'top',
            activeMain: 'index',
            search: '',
            valueAction: '',
            isCreate: false,
            isCreateAPI: false,
            isSettingCreate: false,
            loadingForm: false,
            loadingTable: false,
            activeInstructCreateAPI: ['1','2','3'],
            progress: 0,
            isProgressCreateAPI: false,
            bg: '#fff',
            tabPositionLeft: 'left'
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
        clickCreateSettingProduct()
        {
            let that = this;
            this.clearForm();
            that.isSettingCreate = true;
            that.title = "Cài đặt";

            this.setTimeout1sLoading();
            that.colorCreateSetting = '#909399';
            that.textCreateSetting = '#FFF';

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
            that.$refs[productAPIForm].validate((valid) => {
                if (valid) {
                    console.log(this.productAPIForm);
                    axios.get(this.productAPIForm.link)
                        .then(function (response) {
                            // handle success
                            console.log(response.data);
                            that.listData.indexProductAPI = response.data;
                        })
                        .catch(function (error) {
                            // handle error
                            console.log(error);
                        })
                        .then(function () {
                            // always executed
                        });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        createPasswordCreate(createPasswordForm)
        {
            let that = this;
            that.$refs[createPasswordForm].validate((valid) => {
                if (valid) {
                    console.log(that.createPasswordForm);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        deleteRowCretateAPI(index, rows)
        {
            rows.splice(index, 1);
        },
        changeBG(settingForm)
        {
            let that = this;
            if(that.settingForm.bgcolor)
            {
                that.bg = "red";
            }
            else{
                that.bg = "#fff";
            }
        },
        clearForm()
        {
            let that = this;
            that.isCreate = false;
            that.isCreateAPI = false;
            that.isSettingCreate = false;
            that.textCreate = '';
            that.textCreateAPI = '';
            that.textCreateSetting = '';
            that.colorCreate = '';
            that.colorCreateAPI = '';
            that.colorCreateSetting = '';
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