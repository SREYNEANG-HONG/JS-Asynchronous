export const UserList = (user) => {
  return `
  <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<dl class="max-w-md text-gray-900 divide-y divide-gray-200 dark:text-white dark:divide-gray-700">
<div class="flex flex-col pb-3">
    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Email address</dt>
    <dd class="text-lg font-semibold">${user.email || "No User Name"}</dd>
</div>
<div class="flex flex-col py-3">
    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Home address</dt>
    <dd class="text-lg font-semibold">${
      user.address.city || "address not found"
    }</dd>
</div>
<div class="flex flex-col pt-3">
    <dt class="mb-1 text-gray-500 md:text-lg dark:text-gray-400">Phone number</dt>
    <dd class="text-lg font-semibold">${
      user.phone || "Phone Number not found"
    }</dd>
</div>
</dl>
</div>
`;
};
