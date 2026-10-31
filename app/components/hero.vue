<template>
    <UPageHero
        title="Palivové drevo zo Spiša"
        description="Suché, poctivo pripravené palivové drevo priamo od nás – kvalitné, výhrevné a dovezené až k vám."
        :links="links"
        orientation="vertical"
    />
</template>

<script setup>
    const links = ref([
        {
            label: "Objednaj",
            to: { path: "/", hash: "#objednavka" },
            icon: "i-lucide-truck"
        },
        {
            label: "Zisti viac",
            to: { path: "/", hash: "#info" },
            color: "neutral",
            variant: "subtle",
            trailingIcon: "i-lucide-arrow-down"
        }
    ]);
</script>