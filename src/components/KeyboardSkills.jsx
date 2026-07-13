import "./KeyboardSkills.css";

const ICON_BASE = "https://skillicons.dev/icons?i=";

const sqlserver = (
    <svg viewBox="0 0 32 32">
        <ellipse cx="16" cy="9" rx="9" ry="3.2" fill="none" stroke="#ff6b6b" strokeWidth="1.4" />
        <path d="M7 9v14c0 1.8 4 3.2 9 3.2s9-1.4 9-3.2V9" fill="none" stroke="#ff6b6b" strokeWidth="1.4" />
    </svg>
);

function Icon({ slug }) {
    if (slug === "sqlserver") return sqlserver;
    return <img src={`${ICON_BASE}${slug}`} alt="" width="26" height="26" />;
}

const groups = [
    {
        label: "Frontend",
        keys: [
            { name: "HTML", icon: "html" },
            { name: "CSS", icon: "css" },
            { name: "JavaScript", icon: "js" },
            { name: "React", icon: "react" },
        ],
    },
    {
        label: "Backend",
        keys: [
            { name: "Node.js + Express", icon: "nodejs" },
            { name: ".NET (C#)", icon: "dotnet" },
            { name: "Java (POO)", icon: "java" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "MySQL", icon: "mysql" },
            { name: "SQL Server", icon: "sqlserver" },
        ],
    },
    {
        label: "Herramientas",
        keys: [
            { name: "Postman", icon: "postman" },
            { name: "VS Code", icon: "vscode" },
            { name: "IntelliJ IDEA", icon: "idea" },
            { name: "Docker", icon: "docker" },
            { name: "Figma", icon: "figma" },
        ],
    },
    {
        label: "Control de Versiones",
        keys: [
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
        ],
    },
    {
        label: "SO",
        keys: [
            { name: "CachyOS", icon: "arch" },
            { name: "Ubuntu", icon: "ubuntu" },
            { name: "Windows", icon: "windows" },
        ],
    },
];

export default function SkillsKeyboard() {
    return (

        <div className="skills__board">
            {groups.map((group) => (
                <div className="skills__cluster" key={group.label}>
                    <span className="skills__cluster-label">{group.label}</span>
                    <div className="skills__row">
                        {group.keys.map((key, i) => (
                            <button
                                type="button"
                                key={`${key.name}-${i}`}
                                className="key"
                                title={key.name}
                            >
                                <span className="key__icon">
                                    <Icon slug={key.icon} />
                                </span>
                                <span className="key__name">{key.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}