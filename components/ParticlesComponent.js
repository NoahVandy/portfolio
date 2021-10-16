import Particles from "react-tsparticles"

export default function ParticlesComponent() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <Particles
        height={"auto"}
        options={{
          fpsLimit: 30,
          background: {
            color: {
              value: "#000000",
            },
            image: "url('https://source.unsplash.com/SMSLyc9FHl0/5184x3888')",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
          backgroundMask: {
            cover: {
              color: {
                value: {
                  r: 0,
                  g: 0,
                  b: 0,
                },
              },
            },
            enable: true,
          },
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              bubble: {
                distance: 600,
                duration: 2,
                opacity: 1,
                size: 50,
              },
              grab: {
                distance: 400,
              },
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: {
                value: "#000000",
              },
              distance: 150,
              enable: true,
            },
            move: {
              attract: {
                rotate: {
                  x: 600,
                  y: 1200,
                },
              },
              enable: true,
              outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
            },
            number: {
              density: {
                enable: true,
              },
              value: 80,
            },
            opacity: {
              animation: {
                speed: 1,
                minimumValue: 0.1,
              },
            },
            size: {
              random: {
                enable: true,
              },
              value: {
                min: 1,
                max: 5,
              },
              animation: {
                speed: 10,
                minimumValue: 0.1,
              },
            },
          },
        }}
      />
    </div>
  )
}
