<script lang="ts">
  type Props = {
    description: string;
    textColor: string;
    children: any;
    className?: string;
  }

  let {
    description, textColor, children, className
  }: Props  = $props();

</script>

<p class={"text-lg font-normal leading-relaxed text-opacity-80 " + textColor }>
  {@render children()}
</p>