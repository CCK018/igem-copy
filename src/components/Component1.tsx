import React from "react"

export default function Component1 () {
    return (
        <div
          className="contentBox"
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            flexWrap: "wrap",
          }}
        >
          <img
            className="image"
            src="https://placehold.co/600x400"
            alt="image2"
            style={{
              height: "150px",
              objectFit: "cover",
              width: "300px"
            }}
          />
          <p
            className="textBox"
            style={{
              backgroundColor: "darkgreen",
              color: "white",
              height: "150px",
              width: "300px"
            }}
          >
            lorem
          </p>
        </div>
    );
}
