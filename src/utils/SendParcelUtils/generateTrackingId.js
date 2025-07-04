export default function generateTrackingId(prefix = 'PKG') {
    const timestamp = Date.now().toString(36);        // base36 timestamp
    const random = Math.random().toString(36).slice(2, 8).toUpperCase(); // random alphanumeric
    return `${prefix}-${timestamp}-${random}`;
}