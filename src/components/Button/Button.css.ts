import { css } from "lit";

export default css`
    .dx-btn {
        position: relative; display: inline-block;
        background: #f9f9f9;
        border: 1px solid #ccc;
        padding: 0.5em 1em;
        text-align: center; text-decoration: none; white-space: nowrap;
        user-select: none;
        cursor: pointer;
    }
    .dx-btn * { cursor: pointer; }
    .dx-btn.silent { background: transparent; border: 0; }
    .dx-btn:hover { border-color: #40a9ff; }
    .dx-btn:active { background: #e9e9e9; }

    .dx-btn-content{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    .dx-btn-primary {
        color: #f9f9f9;
        background: #1890ff;
        border-color: #1890FF;
    }

    .dx-btn-primary:hover, dx-btn-primary:focus {
        color: #fff;
        background: #40a9ff;
        border-color: #40a9ff;
    }

    .dx-btn-primary:active {
        color: #fff;
        background: #096dd9;
        border-color: #096dd9;
    }

    .dx-btn-warning {
        background: #33ff55; color: #303030;
    }
    .dx-btn-error {
        background: #ff2233; color: #303030;
    }
    .dx-btn-icon {
        background:#fff;
        color: #303030;
        padding: 2px;
    }
    .dx-theme-dark .dx-btn-icon {
        background: #303030;
        color: #fff;
    }
    .dx-btn-icon:active {
        background: transparent;
    }

    .dx-btn-link {
        border-color: transparent;
        color: #40a9ff;
    }
    .dx-btn-link:hover {
        border-color: transparent;
        color: #096dd9;
    }
    .dx-btn-link:active {
        background: #e9e9e9;
        border-color: transparent;
    }
`