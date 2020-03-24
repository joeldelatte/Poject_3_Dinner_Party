import React from "react";

const styles = {
  spaceItOut: {
    marginTop: 75
  }
}

export default function Footer() {
    return (
        <>
          <div className="navbar bg-light row justify-content-center" style={styles.spaceItOut}>
                <span className="text-muted">Place sticky footer content here.</span>
          </div>
        </>
    )
}