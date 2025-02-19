import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, HashRouter, NavLink as Link, Route, Routes } from "react-router-dom";
import { AppShell, Burger, Button, createTheme, MantineProvider, NavLink, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import '@mantine/core/styles.css';
import Home from "./Home.jsx";


const Links = [
    {
        path: "/",
        content: <Home />,
    }, {
        path: "/ncm-dl", content: null,
    },
    {
        path: "/ncm-lrc", content: null,
    }, {
        path: "/nbt", content: null
    }, {
        path: "/pdf", content: null
    }, {
        path: "/blog", content: null, noShell: true,
    }, {
        path: "/chunk", content: null
    },
    {
        path: "/ico", content: null,
    }
]

// eslint-disable-next-line react/prop-types
function Shell({ Content }) {
    const [opened, { toggle }] = useDisclosure();

    return <AppShell header={{ height: 50 }}
        navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
        }}
        padding="md">
        <AppShell.Header p={"md"}>

            <div style={{ display: "flex", flexDirection: "row", height: "100%", alignItems: "center", gap: "1rem", justifyContent: "space-between" }}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="sm"
                    size="sm"
                />
                <UnstyledButton component={Link} to="/">工具箱</UnstyledButton>
                <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
                    <Button bg={"dark"} component={Link} to={"https://github.com/AXCWG/toolbox"}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style={{ width: "calc(1.375rem * var(--mantine-scale))", height: "calc(1.375rem * var(--mantine-scale))", }}>
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z">
                            </path>
                        </svg>
                    </Button>
                    <Button component={Link} to={"/blog"}>博客</Button>
                </div>
            </div>

        </AppShell.Header>
        <AppShell.Navbar p={"md"}>

            <NavLink component={Link} to="/" label={"首页"} />
            <NavLink href="#" label={"网易云音乐工具"}>
                <NavLink component={Link} to={"/ncm-dl"} label={"音乐下载"} />
                <NavLink component={Link} to={"/ncm-lrc"} label={"歌词搜索下载"} />
            </NavLink>
            <NavLink href='#' label={"我的世界工具"}>
                <NavLink component={Link} to={"/nbt"} label={"NBT标签编辑"} />
                <NavLink component={Link} to={"/chunk"} label={"区块编辑器"} />
            </NavLink>
            <NavLink component={Link} to={"/pdf"} label={"PDF转换"}></NavLink>
            <NavLink component={Link} to={"/ico"} label={"ICO图标生成"}></NavLink>

        </AppShell.Navbar>
        <AppShell.Main>
            {Content}
        </AppShell.Main>
    </AppShell >
}

const theme = createTheme({
    primaryColor: "violet"
})
createRoot(document.getElementById('root')).render(
    <MantineProvider defaultColorScheme='auto' theme={theme}>
        <StrictMode>
            <BrowserRouter>
                <Routes>
                    {
                        Links.map((v, i) => {
                            if (!v.noShell) {
                                return <Route key={i} path={v.path} element={<Shell Content={v.content} />}></Route>
                            } else {
                                return <Route key={i} path={v.path} element={v.content}></Route>
                            }

                        })
                    }

                </Routes>
            </BrowserRouter>
        </StrictMode>
    </MantineProvider>

)
