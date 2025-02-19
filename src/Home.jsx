import './App.css'
import '@mantine/core/styles.css';
import {Container, Title, Text,  List} from "@mantine/core";


function Home() {

    return (
            <Container>
                <Container p={"md"}>
                    <Title >工具箱</Title>
                    <Title order={6}>谢某最新力作</Title>
                    <br/>
                    <Text component='span'>
                        
                        集合众功能与一体的“Unified”网站。
                        <br/>
                        此站功能包括但不限于：

                        <br/><br/>
                        <div>
                            
                        </div>
                        <List withPadding >
                            <List.Item>网易云歌曲下载器</List.Item>
                            <List.Item>十六进制文件编辑器</List.Item>
                            <List.Item>在线文档编辑器</List.Item>
                            <List.Item>IP</List.Item>
                            <List.Item>GeoIP</List.Item>
                        </List>
                        <br/>

                        ...and the list goes on. <br/>

                    </Text>
                </Container>

            </Container>
    )
}

export default Home
