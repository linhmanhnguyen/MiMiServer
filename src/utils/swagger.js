const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'MiMiServer API',
            version: '1.0.0',
            description: 'MiMiServer API Documentation',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['../routes/account.route.js', '../controllers/account.controller.js'],
};

const swaggerSpec = swaggerJSDoc(options);

swaggerSpec.paths['/accounts'] = {
    get: {
        tags: ['Account'],
        summary: 'Lấy danh sách tất cả tài khoản',
        description: 'API này cung cấp danh sách tất cả các tài khoản người dùng.',
        security: [{ BearerAuth: [] }],
        responses: {
            200: {
                description: 'Danh sách tài khoản được trả về thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Lấy danh sách tài khoản thành công',
                            data: [],
                        },
                    },
                },
            },
            404: {
                description: 'Không tìm thấy tài khoản',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Không tìm thấy tài khoản',
                        },
                    },
                },
            },
            500: {
                description: 'Lỗi máy chủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra khi lấy danh sách tài khoản',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/accounts/{id}'] = {
    get: {
        tags: ['Account'],
        summary: 'Lấy thông tin một tài khoản dựa trên ID',
        description: 'API này cung cấp thông tin chi tiết của một tài khoản dựa trên ID.',
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'ID của tài khoản cần lấy thông tin.',
                schema: {
                    type: 'string',
                },
            },
        ],
        security: [{ BearerAuth: [] }],
        responses: {
            200: {
                description: 'Thông tin chi tiết của tài khoản được trả về thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Thành công',
                            data: {},
                        },
                    },
                },
            },
            404: {
                description: 'Không tìm thấy tài khoản',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Không tìm thấy tài khoản',
                        },
                    },
                },
            },
            500: {
                description: 'Lỗi máy chủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra khi lấy thông tin tài khoản',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/accounts/change-password/{id}'] = {
    put: {
        tags: ['Account'],
        summary: 'Cập nhật mật khẩu của một tài khoản dựa trên ID',
        description: 'API này cung cấp khả năng cập nhật mật khẩu của một tài khoản dựa trên ID.',
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'ID của tài khoản cần cập nhật mật khẩu.',
                schema: {
                    type: 'string',
                },
            },
            {
                name: 'body',
                in: 'body',
                required: true,
                description: 'Dữ liệu đầu vào cho việc cập nhật mật khẩu.',
                schema: {
                    $ref: '#/components/schemas/updateAccountPassword',
                },
            },
        ],
        security: [{ BearerAuth: [] }],
        responses: {
            200: {
                description: 'Mật khẩu của tài khoản đã được cập nhật thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Sửa đổi thông tin tài khoản thành công',
                        },
                    },
                },
            },
            400: {
                description: 'Dữ liệu đầu vào không hợp lệ hoặc không đủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra, vui lòng thử lại',
                        },
                    },
                },
            },
            500: {
                description: 'Lỗi máy chủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra khi cập nhật mật khẩu tài khoản',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/accounts/{id}'] = {
    delete: {
        tags: ['Account'],
        summary: 'Xóa một tài khoản dựa trên ID',
        description: 'API này cung cấp khả năng xóa một tài khoản dựa trên ID.',
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'ID của tài khoản cần xóa.',
                schema: {
                    type: 'string',
                },
            },
        ],
        security: [{ BearerAuth: [] }],
        responses: {
            200: {
                description: 'Tài khoản đã được xóa thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Xoá tài khoản thành công',
                        },
                    },
                },
            },
            404: {
                description: 'Không tìm thấy tài khoản',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Không tìm thấy tài khoản với ID cung cấp',
                        },
                    },
                },
            },
            500: {
                description: 'Lỗi máy chủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra khi xoá tài khoản',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/auth/login'] = {
    post: {
        tags: ['Athentication & Authorization'],
        summary: 'Đăng nhập',
        description: 'API này cung cấp chức năng đăng nhập người dùng với tên tài khoản và mật khẩu.',
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/LoginRequest',
                    },
                },
            },
            required: true,
            description: 'Dữ liệu đầu vào cho việc đăng nhập.',
        },
        responses: {
            200: {
                description: 'Đăng nhập thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Đăng nhập thành công',
                            data: 'JWT Token',
                        },
                    },
                },
            },
            422: {
                description: 'Sai mật khẩu, vui lòng thử lại',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Sai mật khẩu, vui lòng thử lại',
                        },
                    },
                },
            },
            404: {
                description: 'Tài khoản không tồn tại',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Tài khoản không tồn tại',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/auth/check-exist-account/{account_name}'] = {
    get: {
        tags: ['Athentication & Authorization'],
        summary: 'Kiểm tra sự tồn tại của tài khoản',
        description: 'API này kiểm tra xem tài khoản có tồn tại hay không dựa trên tên tài khoản.',
        parameters: [
            {
                name: 'account_name',
                in: 'path',
                required: true,
                description: 'Tên tài khoản cần kiểm tra.',
                schema: {
                    type: 'string',
                },
            },
        ],
        responses: {
            200: {
                description: 'Tên tài khoản hợp lệ',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Tên tài khoản hợp lệ',
                        },
                    },
                },
            },
            400: {
                description: 'Tài khoản đã tồn tại',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Tài khoản đã tồn tại',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/conversations'] = {
    post: {
        tags: ['Conversation'],
        summary: 'Tạo cuộc trò chuyện',
        description: 'API này cho phép tạo mới một cuộc trò chuyện.',
        security: [{ BearerAuth: [] }],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/CreateConversationRequest',
                    },
                },
            },
            required: true,
            description: 'Dữ liệu đầu vào cho việc tạo cuộc trò chuyện.',
        },
        responses: {
            200: {
                description: 'Tạo cuộc trò chuyện thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Tạo cuộc trò chuyện thành công',
                            data: 1,
                        },
                    },
                },
            },
            400: {
                description: 'Dữ liệu đầu vào không hợp lệ hoặc không đủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra, vui lòng thử lại',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/conversations'] = {
    get: {
        tags: ['Conversation'],
        summary: 'Lấy danh sách tất cả cuộc trò chuyện',
        description: 'API này cung cấp danh sách tất cả các cuộc trò chuyện.',
        security: [{ BearerAuth: [] }],
        responses: {
            200: {
                description: 'Danh sách cuộc trò chuyện được trả về thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Danh sách cuộc trò chuyện',
                            data: [],
                        },
                    },
                },
            },
            500: {
                description: 'Lỗi máy chủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra khi lấy danh sách cuộc trò chuyện',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/conversations/account/{account_id}'] = {
    get: {
        tags: ['Conversation'],
        summary: 'Lấy danh sách cuộc trò chuyện của một tài khoản dựa trên ID',
        description: 'API này cung cấp danh sách cuộc trò chuyện của một tài khoản dựa trên ID.',
        security: [{ BearerAuth: [] }],
        parameters: [
            {
                name: 'account_id',
                in: 'path',
                required: true,
                description: 'ID của tài khoản cần lấy danh sách cuộc trò chuyện.',
                schema: {
                    type: 'string',
                },
            },
        ],
        responses: {
            200: {
                description: 'Danh sách cuộc trò chuyện được trả về thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Danh sách cuộc trò chuyện',
                            data: [],
                        },
                    },
                },
            },
            404: {
                description: 'Không tìm thấy cuộc trò chuyện',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Không tìm thấy cuộc trò chuyện',
                        },
                    },
                },
            },
            500: {
                description: 'Lỗi máy chủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra khi lấy danh sách cuộc trò chuyện',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/messages'] = {
    post: {
        tags: ['Message'],
        summary: 'Thêm tin nhắn vào cuộc trò chuyện',
        description: 'API này cho phép thêm tin nhắn vào cuộc trò chuyện.',
        security: [{ BearerAuth: [] }],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/InsertMessageRequest',
                    },
                },
            },
            required: true,
            description: 'Dữ liệu đầu vào cho việc thêm tin nhắn.',
        },
        responses: {
            200: {
                description: 'Thêm tin nhắn thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Tin nhắn được thêm vào cuộc hội thoại thành công',
                            data: 1, 
                        },
                    },
                },
            },
            400: {
                description: 'Dữ liệu đầu vào không hợp lệ hoặc không đủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra, vui lòng thử lại',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/messages/conversation/{conversation_id}'] = {
    get: {
        tags: ['Message'],
        summary: 'Lấy tin nhắn theo ID cuộc trò chuyện',
        description: 'API này cung cấp danh sách tin nhắn theo ID cuộc trò chuyện.',
        security: [{ BearerAuth: [] }],
        parameters: [
            {
                name: 'conversation_id',
                in: 'path',
                required: true,
                description: 'ID của cuộc trò chuyện cần lấy tin nhắn.',
                schema: {
                    type: 'string',
                },
            },
        ],
        responses: {
            200: {
                description: 'Danh sách tin nhắn được trả về thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Danh sách tin nhắn',
                            data: [],
                        },
                    },
                },
            },
            404: {
                description: 'Không tìm thấy cuộc trò chuyện',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Không tìm thấy cuộc trò chuyện',
                        },
                    },
                },
            },
            500: {
                description: 'Lỗi máy chủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra khi lấy tin nhắn',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/messages/{id}'] = {
    delete: {
        tags: ['Message'],
        summary: 'Xoá tin nhắn theo ID',
        description: 'API này cho phép xoá một tin nhắn dựa trên ID.',
        security: [{ BearerAuth: [] }],
        parameters: [
            {
                name: 'id',
                in: 'path',
                required: true,
                description: 'ID của tin nhắn cần xoá.',
                schema: {
                    type: 'string',
                },
            },
        ],
        responses: {
            200: {
                description: 'Xoá tin nhắn thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Tin nhắn đã bị xoá',
                            data: [],
                        },
                    },
                },
            },
            404: {
                description: 'Không tìm thấy tin nhắn',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Không tìm thấy tin nhắn',
                        },
                    },
                },
            },
            500: {
                description: 'Lỗi máy chủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Đã có lỗi xảy ra khi xoá tin nhắn',
                        },
                    },
                },
            },
        },
    },
};

swaggerSpec.paths['/crawl-data'] = {
    post: {
        tags: ['Crawl Data'],
        summary: 'Lấy dữ liệu từ website',
        description: 'API này cho phép lấy dữ liệu từ website dựa trên URL, domain, và protocol cung cấp.',
        security: [{ BearerAuth: [] }],
        requestBody: {
            content: {
                'application/json': {
                    schema: {
                        $ref: '#/components/schemas/CrawlDataRequest',
                    },
                },
            },
            required: true,
            description: 'Dữ liệu đầu vào cho việc lấy dữ liệu từ website.',
        },
        responses: {
            200: {
                description: 'Lấy dữ liệu thành công',
                content: {
                    'application/json': {
                        example: {
                            status: true,
                            message: 'Lấy dữ liệu thành công',
                            data: ['url1', 'url2', 'url3'],
                        },
                    },
                },
            },
            400: {
                description: 'Không tìm thấy URL',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Không tìm thấy URL',
                        },
                    },
                },
            },
            500: {
                description: 'Lỗi máy chủ',
                content: {
                    'application/json': {
                        example: {
                            status: false,
                            message: 'Lỗi server. Vui lòng thử lại sau',
                        },
                    },
                },
            },
        },
    },
};

module.exports = swaggerSpec;
