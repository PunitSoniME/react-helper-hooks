import React from 'react';

/**
 * @since 1.11.0
 */
export default function useProvidersTree() {
  const buildProviders = (componentsWithProps: any) => {
    const initialComponent = ({ children }: any) => <>{children}</>;

    return componentsWithProps.reduce(
      (AccumulatedComponents: any, [Provider, props = {}]: any) => {
        return ({ children }: any) => {
          return (
            <AccumulatedComponents>
              <Provider {...props}>{children}</Provider>
            </AccumulatedComponents>
          );
        };
      },
      initialComponent
    );
  };

  return buildProviders;
}
