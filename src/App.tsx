
import './App.css';
import Page from './components/Page';
import Nft, { NftObject } from './components/Nft';
import WalletSelection from './components/WalletSelection';

const nftData: NftObject[] = [
  {
    creator: 'Parallel',
    favourites: 100,
    image: 'unnamed.png',
    likes: 20,
    title: 'Parallel Alpha'
  },
  {
    creator: 'Sacred Skulls Deployer',
    favourites: 340,
    image: 'unnamed2.png',
    likes: 47,
    title: 'Sacred Skulls'
  },
  {
    creator: 'Cool Pets Deployer',
    favourites: 5,
    image: 'unnamed3.png',
    likes: 1,
    title: 'Cool Pets'
  }
]

function App() {
  return (
    <Page>
      <main>
        <div>
          <section className="top-category">
            <div className="section-header">
              <div className="section-title-wrapper row">
                <p className='title'>Top NFT's</p>
                <select className="dropdown" name="filter">
                  <option value="day">day</option>
                  <option value="week">week</option>
                  <option value="month">month</option>
                </select>
              </div>
              <div>
                <button className='btn-primary'>See all</button>
              </div>
            </div>
            <div className="top-items">
              <Nft displayCount={3} items={nftData} />
            </div>
          </section>
          <section className="hot-collections">
            <div className="section-header">
              <p className='title'>Hot Collections</p>
              <div>
                <button className='btn-primary'>See all</button>
              </div>
            </div>
          </section>
        </div>
        <aside>
          <div className="header">
            <WalletSelection />

          </div>
          <div className="search"></div>
          <div className="collections"></div>
        </aside>
      </main>
    </Page>
  );
}

export default App;
