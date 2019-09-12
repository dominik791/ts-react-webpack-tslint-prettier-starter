import * as React from 'react';
import { HashRouter as Router, Link, Route, Switch } from 'react-router-dom';
import * as styles from './App.scss';

const LazyModuleOne = React.lazy(() => import('../modules/ModuleOne/ModuleOne'));
const LazyModuleTwo = React.lazy(() => import('../modules/ModuleTwo/ModuleTwo'));

const App = () => (
	<Router>
		<div className={styles.wrapper}>
			<nav>
				<Link to="/">Start</Link>
				<Link to="/module-one">Module One</Link>
				<Link to="/module-two">Module Two</Link>
			</nav>
			<main>
				<React.Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route path="/module-one" component={LazyModuleOne} />
						<Route path="/module-two" component={LazyModuleTwo} />
					</Switch>
				</React.Suspense>
			</main>
		</div>
	</Router>
);

export default App;
