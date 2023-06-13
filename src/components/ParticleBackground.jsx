import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log(container);
    }, []);

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fpsLimit: 120,
                    interactivity: {
                        detectsOn: "parent",
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                            animation: {
                              h: {
                                count: 0,
                                enable: true,
                                offset: 0,
                                speed: 10,
                                delay: 0,
                                decay: 0,
                                sync: false
                              },
                              s: {
                                count: 0,
                                enable: false,
                                offset: 0,
                                speed: 1,
                                delay: 0,
                                decay: 0,
                                sync: true
                              },
                              l: {
                                count: 0,
                                enable: false,
                                offset: 0,
                                speed: 1,
                                delay: 0,
                                decay: 0,
                                sync: true
                              }
                            }
                        },
                        links: {
                            color: "#ffffff",
                            distance: 250,
                            enable: true,
                            opacity: 0.4,
                            width: 0.4,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 0.5,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 30,
                        },
                        opacity: {
                            value: 0.4,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 6 },
                        },
                    },
                    detectRetina: true,
                }}
            />  
        </div>
    )
}

export default ParticleBackground;