export type ServicesQueryReturnType = {
  allServicesJson: {
    edges: {
      node: {
        title: string;
        description: string;
        steps: string[];
      };
    }[];
  };
};
