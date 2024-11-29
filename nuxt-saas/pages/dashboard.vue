<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
  layout: "internal",
})

interface Stat {
  name: string
  value: string | number
  change: number
  icon: string
}

interface RecentActivity {
  id: string
  type: "payment" | "signup" | "error"
  description: string
  timestamp: string
}

const stats: Stat[] = [
  {
    name: "Total Revenue",
    value: "$4,890",
    change: 12.5,
    icon: "heroicons:currency-dollar",
  },
  {
    name: "Active Users",
    value: "1,234",
    change: 8.2,
    icon: "heroicons:users",
  },
  {
    name: "Conversion Rate",
    value: "3.2%",
    change: -2.1,
    icon: "heroicons:chart-bar",
  },
  {
    name: "Avg. Response Time",
    value: "286ms",
    change: 14.3,
    icon: "heroicons:clock",
  },
]

const recentActivity: RecentActivity[] = [
  {
    id: "1",
    type: "payment",
    description: "New subscription from john@example.com",
    timestamp: "2 minutes ago",
  },
  {
    id: "2",
    type: "signup",
    description: "New user signup - sarah@example.com",
    timestamp: "15 minutes ago",
  },
  {
    id: "3",
    type: "error",
    description: "Failed payment attempt - Invalid card",
    timestamp: "1 hour ago",
  },
]

function getActivityIcon(type: RecentActivity["type"]) {
  switch (type) {
    case "payment":
      return "heroicons:credit-card"
    case "signup":
      return "heroicons:user-plus"
    case "error":
      return "heroicons:exclamation-circle"
  }
}

function getActivityColor(type: RecentActivity["type"]) {
  switch (type) {
    case "payment":
      return "text-green-500"
    case "signup":
      return "text-blue-500"
    case "error":
      return "text-red-500"
  }
}
</script>

<template>
  <div>
    <main class="max-w-7xl mx-auto pb-8">
      <nav class="bg-white border-b border-gray-200 mb-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
            <div class="flex items-center">
              <h1 class="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>
          </div>
        </div>
      </nav>
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div v-for="stat in stats" :key="stat.name" class="bg-white rounded-lg p-6 border-[1px] border-gray-100">
          <div class="flex items-center justify-between mb-4">
            <div class="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center">
              <Icon :name="stat.icon" class="w-6 h-6 text-gray-400" />
            </div>
            <div class="flex items-center text-sm" :class="stat.change >= 0 ? 'text-green-600' : 'text-red-600'">
              <Icon :name="stat.change >= 0 ? 'heroicons:arrow-up' : 'heroicons:arrow-down'" class="w-4 h-4 mr-1" />
              {{ Math.abs(stat.change) }}%
            </div>
          </div>
          <h3 class="text-sm font-medium text-gray-500">{{ stat.name }}</h3>
          <p class="text-2xl font-semibold text-gray-900">{{ stat.value }}</p>
        </div>
      </div>

      <!-- Recent Activity -->
      <div class="bg-white rounded-lg">
        <div class="px-6 py-4 border-b border-gray-200">
          <h2 class="text-lg font-medium text-gray-900">Recent Activity</h2>
        </div>
        <div class="divide-y divide-gray-200">
          <div v-for="activity in recentActivity" :key="activity.id" class="px-6 py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <Icon :name="getActivityIcon(activity.type)" class="w-5 h-5" :class="getActivityColor(activity.type)" />
              </div>
              <div class="ml-4 flex-1">
                <p class="text-sm text-gray-900">{{ activity.description }}</p>
                <p class="text-sm text-gray-500">{{ activity.timestamp }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          class="p-4 bg-white rounded-lg hover:bg-gray-50 transition-shadow flex items-center justify-center gap-2 text-gray-700"
        >
          <Icon name="heroicons:plus-circle" class="w-5 h-5" />
          New Project
        </button>
        <button
          class="p-4 bg-white rounded-lg hover:bg-gray-50 transition-shadow flex items-center justify-center gap-2 text-gray-700"
        >
          <Icon name="heroicons:document-text" class="w-5 h-5" />
          View Reports
        </button>
        <button
          class="p-4 bg-white rounded-lg hover:bg-gray-50 transition-shadow flex items-center justify-center gap-2 text-gray-700"
        >
          <Icon name="heroicons:cog-6-tooth" class="w-5 h-5" />
          Settings
        </button>
      </div>
    </main>
  </div>
</template>
