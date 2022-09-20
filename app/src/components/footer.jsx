import "../styles/about.scss";
import "../styles/footer.scss";
import React from "react";
import Wrapper from "./Helpers/Wrapper";

export default function Footer(props) {
  return (
    <Wrapper>
      <div className="page footer">

        <div class="container p-4">

          <div class="row">

            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Footer text</h5>

              <p>
                
              </p>
            </div>



            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Footer text</h5>

              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                aliquam voluptatem veniam, est atque cumque eum delectus sint!
              </p>
            </div>

          </div>

        </div>

      </div>
    </Wrapper>
  );
}