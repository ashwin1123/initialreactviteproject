import React from 'react'
import ceoDesk from "src/assets/img/person-m-7.webp"

const Ceodesk = () => {
  return (
    <main>
      <section class="boardOfDirectorMessage pt-5 pb-5">
        <div class="space"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-left overviewHeading">
                <h1 class="mainBannerHeading font-weight-bold ">
                  <span class="">Company </span> 
                  <span class="homeBannerNewBlackCnt_tag p-2"><span>Mission</span>
                  </span>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.<br /> Aenean commodo ligula eget dolor. </p>
              </div>
            </div>
          </div>
      </section>
       <section class="wecantogether pt-5 pb-5">
            <div class="container ceomessage">
              <div class="row">
                <div class="col-md-12 ceodesk-message">
                  <p><strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</strong></p>
                  <p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
                  <p>  Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
                  <p>  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>
                  <p><strong>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</strong></p>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12 col-md-12 mb-4">
                  <div class="team-box">
                    <div class="team-photo">
                      <img src={ceoDesk} alt="Walter White" />
                    </div>
                    <div class="team-info">
                      <h3>Walter White</h3>
                      <div class="designation">
                        CEO &amp; Founder
                      </div>
                    <div class="short-line"></div>
                    <div class="social-links"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
       </section>
    </main>
  )
}

export default Ceodesk;
