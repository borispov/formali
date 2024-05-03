<script lang="ts">
  type Props = {
    children: any;
    className?: string;
  }

  let {
    children, className
  }: Props  = $props();

</script>

<div
  data-el="description"
  class={"text-base font-normal leading-relaxed"}>
  {@render children()}
</div>

<style>
  div {
    opacity: 0.7;
  }
</style>