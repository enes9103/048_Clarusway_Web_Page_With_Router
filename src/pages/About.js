import React from 'react';
import "../App.css";


function About() {
  return (
    <>
        <div className="section">
        <div className="container">
            <div className="flex-container">
                <div className="section-left">
                    <h3>Subscribe To Our Newsletter</h3>
                </div>

                <div className="section-right">
                    <input type="text" placeholder="Enter Email..." />
                    <input type="button" value="Subscribe" id="button" />
                </div>
            </div>
        </div>
        </div>

        <div className="about-main">
        <div className="container">
            <div className="flex-container">
                <div className="about-left">
                    <div className="about-content-1">
                        <h2>About Us</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut pariatur voluptatem fuga dolor
                            quis nisi est consectetur, officia eveniet, iste architecto labore quidem autem obcaecati,
                            sed illum repellat maiores eum? Repudiandae quae iste totam vitae. Nam, ad nisi libero quae,
                            iusto eveniet repellat placeat consequuntur, totam fugiat corrupti minus fuga iste
                            distinctio? Fugiat hic itaque impedit praesentium ratione harum sit.</p>
                    </div>
                    <div className="about-content-2">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, veritatis odio laboriosam
                            totam repellendus ad voluptate, reprehenderit sint fugit beatae architecto laborum tempora
                            debitis ex ipsum ratione earum! Doloribus, reprehenderit? Consequuntur, exercitationem. Quis
                            non mollitia consequuntur officia consectetur laboriosam accusantium tenetur magni eveniet
                            cupiditate cumque quo debitis voluptas ad dicta aut, impedit, vero quidem repudiandae! Vero
                            a esse in animi dignissimos voluptas ipsum dolore perferendis laborum quos voluptatem enim
                            similique, nostrum quasi veniam accusantium ea.</p>
                    </div>
                </div>
                <div className="about-right">
                    <h2>What We Do</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, odit cum. Dolorum aliquam
                        placeat fugit laboriosam veritatis est corporis, culpa, nisi et voluptatibus ipsum ut corrupti
                        pariatur ex perferendis animi enim ducimus quos quo inventore, temporibus at cum. Debitis,
                        aliquid!</p>
                </div>
            </div>
        </div>
        </div>
    </>
  );
}

export default About