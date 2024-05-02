import React, { useEffect, useRef, useState } from "react";


const  FadeInSection = ({
    children,
  }) => {
    const domRef = React.useRef();

    const [isVisible, setVisible] = React.useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        console.log(12312);
        // In your case there's only one element to observe:
        if (entries[0].isIntersecting) {
          console.log('asdasdasdasd');
          // Not possible to set it back to false like this:
          setVisible(true);
          // No need to keep observing:
          observer.unobserve(domRef.current);
        }
      });

      observer.observe(domRef.current);

      return () => observer.disconnect();
    }, []);

    return (<section ref={ domRef }  className={ isVisible ? ' onView is-visible ' : 'onView ' }>{ children }</section>);
  };


export default FadeInSection;
