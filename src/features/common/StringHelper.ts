export default class StringHelper {
  static addSpaces(str: string) {
    if (!str) return '';
    return `${str}`.replace(/([A-Z])/g, ' $1').trim();
  }

  static toTitleString(field: string) {
    // fieldName => "Field Name"
    const autoTitle = `${field}`.replace(/([A-Z])/g, ' $1').trim();
    return autoTitle.charAt(0).toUpperCase() + autoTitle.slice(1);
  }
}
