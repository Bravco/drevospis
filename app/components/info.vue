<template>
    <UPageSection
        id="info"
        title="Informácie"
        description="Palivové drevo – Bukové, štiepané. Kvalitné bukové palivové drevo, prirodzene sušené na vzduchu. Vyznačuje sa vysokou výhrevnosťou a dlhým horením."
        icon="i-lucide-box"
        orientation="horizontal"
        :features="features"
        :reverse="true"
    >
        <img
            src="/images/info.webp"
            alt="rozmery palety palivoveho dreva"
            class="aspect-square object-cover rounded-lg shadow-2xl ring ring-default"
        />
    </UPageSection>
</template>

<script lang="ts" setup>
    const features = ref([
        {
            title: "Rozmery",
            description: "Dĺžka polien: 33 cm. Rozmery palety: 1×1×1 m",
            icon: "i-lucide-box"
        },
        {
            title: "Cena",
            description: "80€ ... 1 paleta (800kg)",
            icon: "i-lucide-star"
        },
        {
            title: "Doprava",
            description: "Dovoz po dohode zabezpečím Spišská Nová Ves a okolie.",
            icon: "i-lucide-truck"
        },
        {
            title: "+421 948 121 289",
            icon: "i-lucide-phone",
            to: "tel:+421948121289"
        },
        {
            title: "briketyspis@gmail.com",
            icon: "i-lucide-mail",
            to: "mailto:briketyspis@gmail.com",
            description: "V prípade otázok nás neváhajte kontaktovať."
        }
    ]);
</script>