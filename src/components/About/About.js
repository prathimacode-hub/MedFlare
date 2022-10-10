import classes from "./About.module.css";

const About=()=>{

    return(
        <section className={classes.about}>
            <div className={classes.content}>
                <div className={classes.description}>
                    <h1>Your INSTA Medical AID</h1>
                    <div>
                        <p>
                            MedFlare is a one stop solution for people who likes to get all the medical aid without delay.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in ullamcorper ligula, vitae lobortis erat. Etiam varius ultricies 
                            molestie. Quisque in justo orci. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi eu ultrices nibh, et blandit 
                            lacus. Suspendisse cursus ut metus eu mollis. Duis ac convallis elit, id interdum erat. Morbi fermentum aliquam metus, non 
                            ullamcorper est cursus in.
                        </p>
                        <p>
                            Nulla facilisi. Integer hendrerit massa eget interdum ornare. Integer ut dapibus lorem, at pretium sapien. Aliquam in massa ornare, 
                            egestas orci ac, viverra mi. Nam eu est dui. Donec luctus in dui ac cursus. Integer lobortis nec dui vitae pellentesque. Curabitur placerat
                            bibendum lacinia. Maecenas auctor eros eget venenatis dapibus. Proin magna turpis, vestibulum in mi in, viverra blandit tortor.
                        </p>
                    </div>
                </div>
                <div className={classes.slogan}>
                    <p>Better <span><strong>CARE</strong></span></p>
                    <p>Best <span><strong>AID</strong></span></p>
                </div>
            </div>
        </section>
    );
}

export default About;