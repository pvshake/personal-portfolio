namespace Models {
  interface Project {
    name: string;
    tags: ProjectTag[];
    description: string;
    image: any;
    source_code_link: string;
    web_link: string;
    index: any;
  }

  type ProjectTag = {
    name: string;
    color: string;
  };
}
