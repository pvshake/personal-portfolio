namespace Models {
  interface Project {
    name: string;
    tags: ProjectTag[];
    description: string;
    image: any;
    source_code_link: string;
  }

  type ProjectTag = {
    name: string;
    color: string;
  };
}
