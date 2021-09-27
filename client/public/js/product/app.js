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
                    dateCreate: '21/09/2021 lúc 2:26',
                    dateModified: '21/09/2021 lúc 2:26',
                    userCreate: 'tanhuynh',
                    userModified: 'tanhuynh',
                    active: true,
                    bin: true,
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
                    dateCreate: '21/09/2021 lúc 2:26',
                    dateModified: '21/09/2021 lúc 2:26',
                    userCreate: 'tanhuynh',
                    userModified: 'tanhuynh',
                    active: false,
                    bin: false,
                    follow: true,
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
                tabsHistory:  [
                    {
                        label: 'Tổng lịch sử',
                        name: 'all'
                    },
                    {
                        label: 'Lịch sử truy cập',
                        name: 'access'
                    },
                    {
                        label: 'Lịch sử thay đổi',
                        name: 'change'
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
                ],
                timelineHistory: [
                    {
                        content: 'tanhuynh đã thay đổi sản phẩm',
                        timestamp: '24-09-2021'
                    },
                    {
                        content: 'tanhuynh đã thay đổi sản phẩm',
                        timestamp: '24-09-2021'
                    },
                    {
                        content: 'tanhuynh đã thay đổi sản phẩm',
                        timestamp: '24-09-2021'
                    },
                    {
                        content: 'tanhuynh đã thay đổi sản phẩm',
                        timestamp: '24-09-2021'
                    },
                    {
                        content: 'tanhuynh đã thay đổi sản phẩm',
                        timestamp: '24-09-2021'
                    }
                ],
                tableHistory: [
                    {
                        content: 'tanhuynh đã thay đổi sản phẩm',
                        dateCreate: '24-09-2021',
                        ip: '178.259.367.1.2',
                        userCreate: 'tanhuynh'
                    },
                    {
                        content: 'tanhuynh đã thay đổi sản phẩm',
                        dateCreate: '24-09-2021',
                        ip: '178.259.367.1.2',
                        userCreate: 'tanhuynh'
                    },
                    {
                        content: 'tanhuynh đã thay đổi sản phẩm',
                        dateCreate: '24-09-2021',
                        ip: '178.259.367.1.2',
                        userCreate: 'tanhuynh'
                    },
                    {
                        content: 'tanhuynh đã thay đổi sản phẩm',
                        dateCreate: '24-09-2021',
                        ip: '178.259.367.1.2',
                        userCreate: 'tanhuynh'
                    }
                ],
                radioStatusNote: [
                    {
                        label: 'Rất quan trọng'
                    },
                    {
                        label: 'Quan trọng'
                    },
                    {
                        label: 'Bình thường'
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
            noteForm: {
                content: '',
                status: 'Bình thường',
                title: '',
                date: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
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
            noteValidate: {

            },
            multipleSelection: [],
            dialogFormCreateProductVisible: false,
            dialogFormEditProductVisible: false,
            dialogBodyDetailsProductVisible: false,
            dialogFormNoteProductVisible: false,
            labelPositionTop: 'top',
            activeMain: 'index',
            activeDetailsProduct: 'body',
            activeHistory: 'all',
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
            tabPositionLeft: 'left',
            reverseHistory: true,
            radioHistory: 'Tổng lịch sử'
        }
    },
    mounted() {
        
    },
    wacth: {

    },
    methods: {
        uploadimage()
        { 
            const file = document.querySelector('input[type=file]').files[0];
            const preview = document.getElementById("myImage");
            const reader = new FileReader();

            reader.addEventListener("load", function () {
                preview.src = reader.result;
            }, false);
        
            if (file) {
                reader.readAsDataURL(file);
            }
        },
        clickDetailsProduct(row)
        {
            let that = this;
            this.clearForm();
            that.dialogBodyDetailsProductVisible = true;
            that.title = "Xem chi tiết - " + row.name;

            that.code = row.code;
            that.name = row.name;
            that.image = row.image;
            that.category = row.category;
            that.price = row.price;
            that.view = row.view;
            that.describe = row.describe;
            that.content = row.content;
            that.dateCreate = row.dateCreate;
            that.dateModified = row.dateModified;
            that.userCreate = row.userCreate;
            that.userModified = row.userModified;
            that.active = row.active;
            that.bin = row.bin;
            that.follow = row.follow;
            that.note = row.note;


            that.activeColor = row.active ? 'success' : 'default';
            that.activeText = row.active ? 'Hoạt động' : 'Không hoạt động';

            that.followColor = row.follow ? 'success' : 'default';
            that.followText = row.follow ? 'Đang theo dõi' : 'Không theo dõi';

            that.noteColor = row.note ? 'success' : 'default';
            that.noteText = row.note ? 'Đang chú ý' : 'Không chú ý';

            that.binColor = row.bin ? 'success' : 'default';
            that.binText = row.bin ? 'Yes' : 'No';
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
        clickEditProduct(row)
        {
            let that = this;
            this.clearForm();
            this.productForm = JSON.parse(JSON.stringify(row));
            that.dialogFormEditProductVisible = true;
            that.title = "Sửa sản phẩm - " + row.name;
        },
        clickBinProduct(row)
        {
            let that = this;
            that.$confirm('Bạn có chắc muốn xoá sản phẩm - '+row.name+' vào thùng rác?', 'Cảnh báo', {
                confirmButtonText: 'Xác nhận',
                cancelButtonText: 'Đóng',
                type: 'warning'
                }).then(() => {

                    that.$notify({
                        title: 'Thành công',
                        message: 'Xoá ['+row.name+'] vào thùng rác',
                        type: 'success'
                    });

                }).catch(() => {

                    that.$notify.error({
                        title: 'Thất bại',
                        message: 'Xoá ['+row.name+'] thất bại'
                    });      

            });
        },
        clickFollowProduct(row)
        {
            console.log(row._id);
        },
        clickNoteProduct(row)
        {
            let that = this;
            this.clearForm();
            that.dialogFormNoteProductVisible = true;
            that.title = "Chú ý sản phẩm - " + row.name;
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
                    axios.get(this.productAPIForm.link)
                        .then(function (response) {

                            console.log(response.data);
                            that.listData.indexProductAPI = response.data;

                        })
                        .catch(function (error) {
                            
                            console.log(error);
                        })
                        .then(function () {
                            
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
        createNoteProduct(noteForm)
        {
            let that = this;
            that.$refs[noteForm].validate((valid) => {
                if (valid) {

                    console.log(that.noteForm);
                    that.$notify({
                        title: 'Thành công',
                        message: 'Thêm chú ['+that.noteForm.title+'] thành công',
                        type: 'success'
                    });

                } else {
                    that.$notify.error({
                        title: 'Thất bại',
                        message: 'Thêm chú ý thất bại'
                    }); 
                    return false;
                }
            });
        },
        handleClickDetails()
        {
            let that = this;
            if(that.activeDetailsProduct == 'history')
            {
                that.titleHis = 'Tổng lịch sử';
            }
            else{
                console.log('!!!');
            }
        },
        handleClickHistorySub()
        {
            let that = this;
            if(that.activeHistory == 'change')
            {
                that.titleHis = 'Lịch sử thay đổi';
            }
            else if(that.activeHistory == 'access')
            {
                that.titleHis = 'Lịch sử truy cập';
            }
            else if(that.activeHistory == 'all')
            {
                that.titleHis = 'Tổng lịch sử';
            }
            else{
                console.log('!!!');
            }
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