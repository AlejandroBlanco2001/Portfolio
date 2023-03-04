export type buttonProps = {
    text: string;
    onClickFunction: (event: any) => void;
    extra_classes?: string;
    logo: string;
};

export type WorkShowcaseProps = {
    title: string;
    description: string;
    image: string;
    orientation: string;
    link: string;
};
