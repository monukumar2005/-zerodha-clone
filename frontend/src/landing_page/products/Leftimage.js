import React from 'react';

function Leftimage({
  imageURL,
  productName,
  productDescription,
  tryDemo,
   tryDemoText,
  learnMore,
  googlePlay,
  appStore,
   imageStyle,
   
}) {
  return (
    <div className='container  mt-5'>
      <div className='row mt-5 p-5' style={{ marginLeft: '45px' }}>
        
        <div className='col-7'>
          <img src={imageURL} alt={productName} style={imageStyle} />
        </div>

        <div className='col-5 mt-5'>
          <h2 className='text-muted fs-4 mb-4'>{productName}</h2>

          <p className='mb-3  fs-6'style={{ lineHeight: "2" }}>{productDescription}</p>

          <div>
            {tryDemo && (
  <a href={tryDemo} style={{ textDecoration: 'none' }}>
    {tryDemoText}
    <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
  </a>
)}

            {learnMore && (
              <a
                href={learnMore}
                style={{ marginLeft: '50px', textDecoration: 'none' }}
              >
                Learn more <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </a>
            )}
          </div>

          {(googlePlay || appStore) && (
            <div className='mt-3'>
              {googlePlay && (
                <a href={googlePlay}>
                  <img src='media/googlePlayBadge.svg' alt='Google Play' />
                </a>
              )}

              {appStore && (
                <a href={appStore} style={{ marginLeft: '50px' }}>
                  <img src='media/appstoreBadge.svg' alt='App Store' />
                </a>
              )}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Leftimage;