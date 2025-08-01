import React, { useEffect, useState } from 'react';
import { useLoader } from '../context/LoaderContext';

export default function withDynamicLoader(WrappedComponent) {
  return function LoaderWrappedComponent(props) {
    const { startLoader, stopLoader } = useLoader();
    const [show, setShow] = useState(false);

    useEffect(() => {
      let isMounted = true;
      let timeoutId;

      const load = async () => {
        try {
          await startLoader(); // Load assets and show loader
          if (!isMounted) return;

          // Show the component after short artificial delay (optional)
          timeoutId = setTimeout(() => {
            if (!isMounted) return;
            setShow(true);
            stopLoader(); // Stop loader after component is shown
          }, 500);
        } catch (err) {
          console.error("Dynamic loader failed:", err);
          setShow(true); // Fail-safe: still show component
          stopLoader();
        }
      };

      load();

      return () => {
        isMounted = false;
        clearTimeout(timeoutId);
        stopLoader(); // Cleanup loader on unmount
      };
    }, []);

    return show ? <WrappedComponent {...props} /> : null;
  };
}
