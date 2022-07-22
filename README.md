## 开发说明 :rocket:

### 1. 克隆仓库/拉取仓库

+ 克隆

```bash
git clone https://github.com/clouds-cat/OnlineJudgeFE.git
```

+ 拉取

```bash
git pull
```

### 2. 切换到自己的分支

```bash
git checkout -b your_branch
```

### 3. 创建、添加、修改自己负责的模块

> Developing…

### 4. 提交项目至仓库（分支）

```bash
git add .
git commit -a -m"Message"
git push origin your_branch
```

### 5. 提交 `pr(pull request)` 并合并分支

浏览器进入 github 仓库，选中 `pull requests` 模块。

点击 `New pull request` 按钮创建 `pr`，并使你的分支 `compare:your_branch` 指向 `base:main` 分支。

点击 `merge` 按钮完成合并。

## 目录结构 :evergreen_tree:

```bash
.
├── LICENSE
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   │   └── logo.png
│   ├── components
│   │   └── HelloWorld.vue
│   ├── main.js
│   ├── router
│   │   ├── admin.js
│   │   └── index.js
│   ├── store
│   │   ├── actions.js
│   │   ├── index.js
│   │   └── mutations.js
│   ├── utils
│   │   ├── api
│   │   │   ├── ProblemAPI.js
│   │   │   └── UserAPI.js
│   │   └── request.js
│   └── views
│       ├── admin
│       ├── error
│       │   ├── 401.vue
│       │   └── 404.vue
│       └── oj
│           └── index.vue
└── vite.config.js
```

