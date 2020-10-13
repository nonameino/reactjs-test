import React from 'react';
import './App.css';
import ViewBanner from './components/ViewBanner';
import ViewEvents from './components/ViewEvents';
import ViewFooter from './components/ViewFooter';
import ViewRegister from './components/ViewRegister';
import { ViewStickyBottom, ViewStickyTop } from './components/ViewSticky';
import ReactPageScroller from 'react-page-scroller/lib';

import './css/utils.scss';
import Global from './Global';

// function App() {
//   return (
//     <div className='App'>
//       <ViewStickyTop />
//       <ViewBanner />
//       <ViewRegister />
//       <ViewEvents />
//       <ViewFooter />
//       <ViewStickyBottom />
//     </div>
//   );
// }

class App extends React.Component<any,{currentPage:any}> {
  constructor(props:any) {
    super(props);
    this.state = {currentPage:null};
  }

  handlePageChange = (number:number)=>{
    this.setState({currentPage:number});
  }

  render() {
    return (
      <div className='App'>
        <React.Fragment>
          <ViewStickyTop />
          {!Global.isMobile()
          ? (<ReactPageScroller pageOnChange={this.handlePageChange}
                              customPageNumber={this.state.currentPage}>
              <ViewBanner />
              <ViewRegister />
              <ViewEvents />
              <ViewFooter />
            </ReactPageScroller>)
          : (
            <>
              <ViewBanner />
              <ViewRegister />
              <ViewEvents />
              <ViewFooter />
            </>
          )}
          <ViewStickyBottom />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
