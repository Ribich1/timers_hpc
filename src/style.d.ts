// declare module "*.css" {
//   const classnames: { [key: string]: string };
//   export default classnames;
// }

declare module "*.css" {
  const styles: { [className: string]: string };
  export = styles;
}