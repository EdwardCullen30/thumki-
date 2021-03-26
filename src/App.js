import logo from './logo.svg';
import './App.css';
import Card from './component/card/PCard';
import { Grid, Container } from '@material-ui/core';
import "antd/dist/antd.css";

function App() {
	return (
		<Container
			maxWidth="md"
			style = {{
				padding : 20
			}}
		>
			<Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
				spacing = {8}
            >
				<Grid
                    item
                    xs={6}
                  
                >
					<Card/>
				</Grid>
				<Grid
                    item
                    xs={6}
                    
                >
					<Card/>
				</Grid>
				<Grid
                    item
                    xs={6}
                   
                >
					<Card/>
				</Grid>
				<Grid
                    item
                    xs={6}
                   
                >
					<Card/>
				</Grid>
			</Grid>
		</Container>


	);
}

export default App;
